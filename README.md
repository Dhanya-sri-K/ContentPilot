<p align="center">
  <a href="https://postiz.com/" target="_blank">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/765e9d72-3ee7-4a56-9d59-a2c9befe2311">
    <img alt="Postiz Logo" src="https://github.com/user-attachments/assets/f0d30d70-dddb-4142-8876-e9aa6ed1cb99" width="280"/>
  </picture>
  </a>
</p>

<p align="center">
<a href="https://opensource.org/license/agpl-v3">
  <img src="https://img.shields.io/badge/License-AGPL%203.0-blue.svg" alt="License">
</a>
</p>

<h3 align="center"><strong><a href="https://github.com/gitroomhq/postiz-agent">NEW: check out Postiz agent CLI! perfect for OpenClaw and other agents</a></strong></h3>
<div align="center">
  <strong>
  <h2>Your ultimate AI social media scheduling tool</h2><br />
  <a href="https://postiz.com">Postiz</a>: An alternative to: Buffer.com, Hypefury, Twitter Hunter, etc...<br /><br />
  </strong>
  Postiz offers everything you need to manage your social media posts,<br />build an audience, capture leads, and grow your business.
</div>

<div class="flex" align="center">
  <br />
  <img alt="Instagram" src="https://postiz.com/svgs/socials/Instagram.svg" width="32">
  <img alt="Youtube" src="https://postiz.com/svgs/socials/Youtube.svg" width="32">
  <img alt="Dribbble" src="https://postiz.com/svgs/socials/Dribbble.svg" width="32">
  <img alt="Linkedin" src="https://postiz.com/svgs/socials/Linkedin.svg" width="32">
  <img alt="Reddit" src="https://postiz.com/svgs/socials/Reddit.svg" width="32">
  <img alt="TikTok" src="https://postiz.com/svgs/socials/TikTok.svg" width="32">
  <img alt="Facebook" src="https://postiz.com/svgs/socials/Facebook.svg" width="32">
  <img alt="Pinterest" src="https://postiz.com/svgs/socials/Pinterest.svg" width="32">
  <img alt="Threads" src="https://postiz.com/svgs/socials/Threads.svg" width="32">
  <img alt="X" src="https://postiz.com/svgs/socials/X.svg" width="32">
  <img alt="Slack" src="https://postiz.com/svgs/socials/Slack.svg" width="32">
  <img alt="Discord" src="https://postiz.com/svgs/socials/Discord.svg" width="32">
  <img alt="Mastodon" src="https://postiz.com/svgs/socials/Mastodon.svg" width="32">
  <img alt="Bluesky" src="https://postiz.com/svgs/socials/Bluesky.svg" width="32">
</div>

<p align="center">
  <br />
  <a href="https://docs.postiz.com" rel="dofollow"><strong>Explore the docs »</strong></a>
  <br />

  <br />
  <a href="https://youtube.com/@postizofficial" rel="dofollow"><strong>Watch the YouTube Tutorials»</strong></a>
  <br />
</p>

<p align="center">
  <a href="https://platform.postiz.com">Register</a>
  ·
  <a href="https://discord.postiz.com">Join Our Discord (devs only)</a>
  ·
  <a href="https://docs.postiz.com/public-api">Public API</a><br />
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/@postiz/node">NodeJS SDK</a>
  ·
  <a href="https://www.npmjs.com/package/n8n-nodes-postiz">N8N custom node</a>
  ·
  <a href="https://apps.make.com/postiz">Make.com integration</a>
</p>

<br /><br />

## 🔌 See the leading Postiz features

<p align="center">
  <a href="https://www.youtube.com/watch?v=BdsCVvEYgHU" target="_blank">
    <img alt="Postiz" src="https://github.com/user-attachments/assets/8b9b7939-da1a-4be5-95be-42c6fce772de" />
  </a>
</p>

## ✨ Features

| ![Image 1](https://github.com/user-attachments/assets/a27ee220-beb7-4c7e-8c1b-2c44301f82ef) | ![Image 2](https://github.com/user-attachments/assets/eb5f5f15-ed90-47fc-811c-03ccba6fa8a2) |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| ![Image 3](https://github.com/user-attachments/assets/d51786ee-ddd8-4ef8-8138-5192e9cfe7c3) | ![Image 4](https://github.com/user-attachments/assets/91f83c89-22f6-43d6-b7aa-d2d3378289fb) |

### Our Sponsors

| Sponsor |                                  Logo                                   | Description     |
|---------|:-----------------------------------------------------------------------:|-----------------|
| [Hostinger](https://www.hostinger.com/vps/docker/postiz?ref=postiz) | <img src=".github/sponsors/hostinger.png" alt="Hostinger" width="500"/> | Hostinger is on a mission to make online success possible for anyone – from developers to aspiring bloggers and business owners |
| [Virlo](https://dev.virlo.ai/?ref=postiz) | <img src="https://github.com/user-attachments/assets/25182598-5344-45fc-b9cd-e4cfa16aabfd" alt="Virlo" width="500"/> | Virlo is the #1 social media trend spotting and all-in-one GTM tool for teams leveraging short-form video |



# 🚀 Overview & Purpose

**Postiz** is the ultimate open-source, AI-powered social media management and scheduling platform. It allows businesses, developers, and creators to automate, orchestrate, and analyze their social media presence across channels (LinkedIn, X/Twitter, Instagram, Facebook, TikTok, Mastodon, Bluesky, Discord, Slack, etc.) from a single, self-hosted console.

### Why use Postiz?
- **Unified Social Scheduling**: Queue, preview, and post updates to multiple networks simultaneously.
- **AI Agent Chatbot**: Integrated AI agent powered by **Mastra** and **Google Gemini** that can schedule posts, generate copy, search analytics, and configure channels natively through chat.
- **Robust Background Jobs**: Utilizes **Temporal.io** for reliable, fault-tolerant job execution and automatic retries, ensuring post schedules never get dropped.
- **Rich Integrations**: Supports custom third-party integrations (such as Keycloak, ElevenLabs, Claude Code, etc.) and automation workflows via N8N, Make.com, and Zapier.

---

## 🛠️ Architecture & Tech Stack

- **Monorepo Management**: `pnpm` workspaces
- **Frontend App**: Next.js (React)
- **Backend API**: NestJS
- **Orchestrator Worker**: NestJS + Temporal.io
- **Database**: PostgreSQL (interfaced via Prisma ORM)
- **In-Memory Cache**: Redis
- **AI Framework**: Mastra Engine + Vercel AI SDK

---

## 💻 How to Run Locally (Step-by-Step)

Follow these instructions to start the databases and services on your local machine:

### 1. Start the Docker Database Services
Ensure **Docker Desktop** is running. Then, spin up the local PostgreSQL and Redis databases:
```powershell
docker compose -f docker-compose.dev.yaml up -d
```
> [!NOTE]
> If the `temporal` setup container exits because the database was still booting up, simply restart it using:
> `docker start temporal`

### 2. Install Workspace Dependencies
Ensure you have Node.js (version >= 22.12.0) and run `pnpm install`:
```powershell
pnpm install
```

### 3. Sync Database Migrations
Push the database schema migrations to the PostgreSQL container via Prisma:
```powershell
pnpm run prisma-db-push
```

### 4. Build the Projects
Compile all backend, orchestrator, and frontend code:
```powershell
pnpm run build
```

### 5. Start the Application Services
Open **three separate terminal windows** and execute the following commands to run the microservices concurrently:

#### Terminal 1: Backend API Server (Port 3000)
```powershell
pnpm run start:prod:backend
```

#### Terminal 2: Orchestrator Service (Port 3002)
```powershell
pnpm run start:prod:orchestrator
```

#### Terminal 3: Frontend Server (Port 4200)
```powershell
pnpm run start:prod:frontend
```

Once running, access the web console locally at: **http://localhost:4200**

## Sponsor Postiz

We now give a few options to Sponsor Postiz:
- Just a donation: You like what we are building, and want to buy us some coffees so we can build faster.
- Main Repository: Get your logo with a backlink from the main Postiz repository. Postiz has almost 3m downloads and 20k views per month.
- Main Repository + Website: Get your logo on the central repository and the main website. Here are some metrics: - Website has 20k hits per month + 65 DR (strong backlink) - Repository has 20k hits per month + Almost 3m docker downloads.

Link: https://opencollective.com/postiz

## Postiz Compliance

- Postiz is an open-source, self-hosted social media scheduling tool that supports platforms like X (formerly Twitter), Bluesky, Mastodon, Discord, and others.
- Postiz hosted service uses official, platform-approved OAuth flows.
- Postiz does not automate or scrape content from social media platforms.
- Postiz does not collect, store, or proxy API keys or access tokens from users.
- Postiz never ask users to paste API keys into our hosted product.
- Postiz Users always authenticate directly with the social platform (e.g., X, Discord, etc.), ensuring platform compliance and data privacy.

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=gitroomhq/postiz-app&type=date&legend=top-left)](https://www.star-history.com/#gitroomhq/postiz-app&type=date&legend=top-left)

## License

This repository's source code is available under the [AGPL-3.0 license](LICENSE).

<br /><br /><br />

<p align="center">
  <a href="https://www.g2.com/products/postiz/take_survey" target="blank"><img alt="g2" src="https://github.com/user-attachments/assets/892cb74c-0b49-4589-b2f5-fbdbf7a98f66" /></a>
</p>
<p align="center">
  <img src="https://github.com/snyk-labs/secure-developer-sample-repo/raw/main/badge_full.svg" alt="Secure Developer Badge Full" width="150">
</p>