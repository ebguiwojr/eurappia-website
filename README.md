# eurappia-website

## Firebase Hosting canonical homepage setup

This site is a static Firebase Hosting site served from the repository root.

The Firebase Hosting config redirects `/index.html` to the canonical homepage:

```text
https://eurappia.com/
```

Deploy the config with:

```sh
firebase deploy --only hosting
```

Firebase Hosting redirect rules in `firebase.json` match URL paths, not request
hosts, so the `www` to apex redirect must be configured in Firebase Hosting's
custom domain setup:

1. Keep `eurappia.com` connected to the Firebase Hosting site that serves this
   repository.
2. Add or edit `www.eurappia.com` as a Firebase Hosting custom domain.
3. Enable the Firebase custom-domain option to redirect all requests for
   `www.eurappia.com` to `https://eurappia.com`.
4. Keep DNS for both `eurappia.com` and `www.eurappia.com` pointed at Firebase
   Hosting as instructed by the Firebase console.

After deployment, validate the canonical homepage redirects:

```sh
curl -I https://eurappia.com/
curl -I https://eurappia.com/index.html
curl -I http://www.eurappia.com/
curl -I https://www.eurappia.com/
curl -I https://www.eurappia.com/index.html
curl -I https://eurappia.com/travmate
curl -I https://eurappia.com/cartmate
curl -I https://eurappia.com/travmate.html
curl -I https://eurappia.com/cartmate.html
```
