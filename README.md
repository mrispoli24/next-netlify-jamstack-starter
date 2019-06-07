# next-netlify-jamstack-starter

A nextjs based JAMstack starter for deploying static applications with Netlify lambda ready to go.

## To Begin

Run: `npm install` and then `npm run start`. This allows you to develop locally with your lambdas running from the `/functions` directory via middleware proxy on `https://localhost:9000` wherever you reference `./netlify/functions`.

## To Deploy

Deployment with netlify is just a matter of linking the repository which will automatically deploy merges to master. The `netlify.toml` file is set with the static build directory and commands already so feel free to leave the form blank on the netlify side.

## To Come

* Dynamic preview environment deployment to heroku.
* Contentful Integration.
