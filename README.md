# nowfar.lol

[![nowfar.lol Image](.github/nowfar.lol.png)](https://nowfar.lol.github.io/docs/)

## Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fnowfar.lol%2Fnowfar.lol)

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/nowfar.lol/nowfar.lol)

**NOTE: To self-host, more setup is required. Check the [docs](https://nowfar.lol.github.io/docs/) to properly set up!!!!**

## Links And Resources

| Service       | Link                                            | Source Code                                             |
| ------------- | ----------------------------------------------- | ------------------------------------------------------- |
| nowfar.lol Docs | [docs](https://nowfar.lol.github.io/docs/)                | [source code](https://github.com/nowfar.lol/docs)         |
| Extension     | [extension](https://nowfar.lol.github.io/docs/extension) | [source code](https://github.com/nowfar.lol/browser-ext)  |
| Proxy         | [simple-proxy](https://nowfar.lol.github.io/docs/proxy)  | [source code](https://github.com/nowfar.lol/simple-proxy) |
| Backend       | [backend](https://github.com/nowfar.lol/backend)          | [source code](https://github.com/nowfar.lol/backend)      |
| Frontend      | [nowfar.lol](https://nowfar.lol.github.io/docs/instances)  | [source code](https://github.com/nowfar.lol/nowfar.lol)     |
| Weblate       | [weblate](https://nowfar.lol.github.io/docs/weblate)          |                                                         |

## Referrers

- [FMHY (Voted as #1 streaming site of 2024, 2025)](https://fmhy.net)

## Running Locally

Type the following commands into your terminal / command line to run nowfar.lol locally

```bash
git clone https://github.com/nowfar.lol/nowfar.lol.git
cd smov
git pull
pnpm install
pnpm run dev
```

Then you can visit the local instance [here](http://localhost:5173) or, at local host on port 5173.

## Updating a nowfar.lol Instance

To update a nowfar.lol instance you can type the below commands into a terminal at the root of your project.

```bash
git remote add upstream https://github.com/nowfar.lol/nowfar.lol.git
git fetch upstream # Grab the contents of the new remote source
git checkout <YOUR_MAIN_BRANCH>  # Most likely this would be `origin/production`
git merge upstream/production
# * Fix any conflicts present during merge *
git add .  # Add all changes made during merge and conflict fixing
git commit -m "Update nowfar.lol instance (merge upstream/production)"
git push  # Push to YOUR repository
```

## Contact Me / Discord

[Discord](https://discord.com)
