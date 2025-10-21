"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export const funny404Texts: string[] = [
  "Oops! Looks like this page took a day off.",
  "Error 404: The page you’re looking for is currently binge-watching Netflix.",
  "This page didn’t get enough coffee to exist today.",
  "You found a secret void! Sadly, it’s empty.",
  "404 – The page ran away screaming.",
  "Oops! This page is hiding behind the couch.",
  "Error 404: Brain not found... wait, page not found!",
  "The page you’re looking for went to grab a snack.",
  "Our developers swear this page existed yesterday.",
  "Oops! You’ve broken the internet. Just kidding... probably.",
  "This isn’t the page you’re looking for. Move along, Jedi.",
  "404: Page missing. Aliens suspected.",
  "Looks like this page got deleted by your cat.",
  "Error 404: Someone must’ve spilled coffee on the server again.",
  "You tried to access this page, but it rolled a natural 1.",
  "404 – The link was sus, and it got ejected.",
  "This page got lost in the matrix.",
  "Whoops! The page tripped over a cable and fell into the abyss.",
  "404: Page not found. Maybe check under the rug?",
  "The internet gremlins ate this page.",
  "404: That page ye seek hath vanished into legend.",
  "You’re early! The page isn’t ready yet.",
  "This page has gone fishing. Try again later.",
  "Our AI overlord decided this page was inefficient.",
  "404: Page not found. But at least you found yourself.",
  "Looks like someone forgot to feed this page.",
  "This page went out for milk and never came back.",
  "404: The only winning move is not to look for this page.",
  "Oops! This link is as empty as my fridge.",
  "404: Page not found. Bonus XP for exploring, though!",
]

const EMOJIS = [
  "👻",
  "🤖",
  "🛸",
  "🫠",
  "🧟",
  "🚀",
  "👾",
  "🦄",
  "🐱",
  "🔎",
]

export default function NotFoundClient() {
  const [message, setMessage] = useState<string>(() => funny404Texts[Math.floor(Math.random() * funny404Texts.length)])
  const [emoji, setEmoji] = useState<string>(() => EMOJIS[Math.floor(Math.random() * EMOJIS.length)])

  useEffect(() => {
    // Small visual variety on each visit
    setMessage(funny404Texts[Math.floor(Math.random() * funny404Texts.length)])
    setEmoji(EMOJIS[Math.floor(Math.random() * EMOJIS.length)])
  }, [])

  function shuffle() {
    setMessage(funny404Texts[Math.floor(Math.random() * funny404Texts.length)])
    setEmoji(EMOJIS[Math.floor(Math.random() * EMOJIS.length)])
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-24">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 text-center md:text-left">
              <div
                className="text-[6.5rem] md:text-[8rem] leading-none select-none"
                aria-hidden
                style={{ lineHeight: 1 }}
              >
                <span role="img" aria-label="lost page">{emoji}</span>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-6xl md:text-7xl font-extrabold text-foreground">404</h1>
              <p className="mt-4 text-xl md:text-2xl text-muted-foreground" role="status" aria-live="polite">
                {message}
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3">
                <Link href="/" className="inline-block px-4 py-2 rounded bg-foreground text-background text-sm font-medium hover:opacity-95 transition">
                  Take me home
                </Link>

                <button
                  type="button"
                  onClick={shuffle}
                  className="inline-block px-4 py-2 rounded border border-border text-sm text-muted-foreground hover:text-foreground transition"
                >
                  Another one
                </button>

                <Link href="/security" className="inline-block px-4 py-2 rounded text-sm border border-border text-muted-foreground hover:text-foreground transition">
                  Security
                </Link>
              </div>

              <p className="mt-4 text-xs text-muted-foreground">If you think this is an error, please file a report at <a className="text-foreground hover:underline" href="mailto:security@vaultscope.dev">security@vaultscope.dev</a> or ask on Discord.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
