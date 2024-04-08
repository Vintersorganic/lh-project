# LH-Project README

How to get started.

## Prerequisites

Before you start, ensure you have **Node.js** installed on your system. This project requires **Node.js version 18 or higher**. You can check your Node version by running `node -v` in your terminal or download it from [https://nodejs.org/](https://nodejs.org/). If you need to run multiple version of Node on your machine please download NVM [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm).

## Quick Start

1. **Clone the repository**
    ```bash
    git clone https://github.com/Vintersorganic/lh-project.git
    ```

2. **Navigate to the project directory**
    ```bash
    cd lh-project
    ```

3. **Install dependencies**
    ```bash
    npm install
    ```

4. **Run the development server**
    ```bash
    npm run dev
    ```
    Now, open [http://localhost:3000](http://localhost:3000) in your browser to see the app live!

## Architectural Choices

- **Next.js**: Provides server-side rendering and static site generation for a fast, SEO-friendly app.
- **React Query**: Enhances data fetching with background updates and caching. I was personally more inclined towards RTK Query before but this plus Zustand really simplifies everything.
- **Zustand**: Simplifies state management, reducing boilerplate. Same as above.
- **React Hook Form & Zod**: React Hook Form does the heavy lifting of form management pretty easily. Added Zod for the schema validation as I saw it recommended in many forums. Pretty similar to yup, but slightly simpler in my opinion.
- **MUI**: Offers customizable, polished UI components.
- **Lottie**: Wanted to put an animation on the error page, so I chose the first free one I found. Lottie usually makes things look more professional, and it’s super easy to use.
- **TypeScript & Lint**:  I'm a big fan of the autocompletion TypeScript brings to the table, not to mention the strict typing. Really helps to avoid those easy misspell mistakes! And same with Lint. It helps a lot, specially in big teams.

## Final Thoughts

I aimed for a simple, yet elegant site, believing web apps should be modern but user-friendly first. The goal was to make information easy to find and the experience intuitive. It’s about balance—looking good without sacrificing functionality. The less clicks, the better!
There are quite a few things that I know could be improved - using Next JS Loading, a bit more of separation (BasicTable.tsx does a lot of things, instead of just focusing on the UI), a better search component, better handling of responsiveness etc., but given the time constraints this is the final version. I left a few comments throughout the project, too.