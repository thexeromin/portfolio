---
title: "I Thought Normalized State Would Fix My Re-render Problem. It Didn't."
description: "I thought normalized state would fix my React re-render problem. Here's what I tried, why Context didn't help, and how Zustand's selective subscriptions actually solved it"
date: 2026-04-04
updatedAt: 2026-04-06
tags: ["React", "State Management", "Zustand", "Performance"]
---

I was building a Kanban board called **Kantoo** and hit a classic React performance problem. This is what I tried, what didn't work, and what actually fixed it.

## What I Built First

I went with a normalized state architecture managed through `useReducer`. The idea was simple: instead of deeply nested state, keep everything flat. Each column and card lives in its own lookup object, and you reference them by ID.

It felt clean.

## The Problem

Even with normalized state, two things were going wrong.

A single card update was causing every component on the board to re-render, including columns that had nothing to do with that card. I could see it clearly in React DevTools Profiler. The render time for a single card move was sitting at around 55ms.

I was also passing data to components that didn't need it. Some components were receiving data purely so they could pass it further down, even though they didn't use it themselves. Just middlemen adding to the problem.

## My First Idea: React Context

My first thought was to reach for Context. Put state in a provider and read only what each component needs inside a custom hook.

Sounds good in theory. But here's the catch: even if you only read one value from context, React still re-renders the component whenever anything in that context changes. The component is subscribed to the entire context object under the hood.

So Context would just move the problem, not solve it.

## What Actually Fixed It: Zustand with Selective Subscriptions

The real fix is a library that supports selective subscriptions, where a component only re-renders when the specific piece of state it cares about changes. Zustand does exactly this.

```js
// This component only re-renders when cards changes
const cards = useStore((state) => state.cards);
```

Once I migrated Kantoo to Zustand and combined it with the normalized state architecture I already had, something clicked. Untouched cards stopped re-rendering entirely. A card move now only wakes up the components actually involved.

## The Results

I measured both before and after using React DevTools Profiler.

![React DevTools Profiler - useReducer, 55ms render time](https://github.com/thexeromin/kantoo/blob/main/screenshots/profiler-before.jpg?raw=true)

With useReducer and prop drilling, a single card move produced a render time of around **55ms**.

![React DevTools Profiler - Zustand selective subscriptions, 15ms render time](https://github.com/thexeromin/kantoo/blob/main/screenshots/profiler-after.jpg?raw=true)

After migrating to Zustand with selective subscriptions, the same card move commits in around **15ms**. That is a ~73% reduction, not from micro-optimizations but from rethinking how state flows through the tree.

## Why Memoization Alone Was Not Enough

This tripped me up early. `React.memo` only prevents re-renders when props do not change. But when state lives at the top and gets passed down, the parent re-renders on any update and passes new references down, so memo never gets a chance to bail out.

Zustand's subscriptions bypass this entirely. Components pull what they need straight from the store and ignore everything else.

## What This Taught Me

Once you understand the difference it changes how you think about state:

Context is great for things that rarely change like a theme or current user. Zustand is better when you have frequently updated state that different components care about independently.

The key phrase is granular subscriptions. Components only pay attention to exactly what they need, nothing more.

---

_Check out [Kantoo on GitHub](https://github.com/thexeromin/kantoo)._
