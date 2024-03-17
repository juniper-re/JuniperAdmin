# Juniper Admin

## Running the tool

```sh
npm i
npm run dev
```
Then navigate to localhost:3000

## Whitelabel tool (Theme Creator)
### Creating theme
You can change any individual field here, and any changes are persisted until you hit "clear".
Once you are complete with your personalization of the elements, hit "export"

This will create a theme.json file. 

Take that file, and copy it into `src/branding/BrandingOverrides` folder of JuniperWebClient.

Test the adjustments made

publish JuniperWebClient as normal

# IMPORTANT
you must place the correct Tenant ID within the whitelabel application. Without this, the mobile app will not pick up the adjusments, and apply the themes the legacy way.

