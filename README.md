### Dependencies

```bash
# default Next JS Dependencies
react
react-dom
next

# prisma client
@prisma/client
```

### Dev Dependencies

```bash
# default Next JS Dev Dependencies
typescript
@types/node
@types/react
@types/react-dom
postcss
tailwindcss
eslint
eslint-config-next

# authentication
next-auth@beta

# prisma
prisma

# BaaS specific (I like supabase)
supabase

# eslint
eslint-config-prettier
eslint-plugin-const-case
eslint-plugin-import
eslint-plugin-jsx-a11y
eslint-plugin-perfectionist
eslint-plugin-prettier
eslint-plugin-promise
eslint-plugin-regexp
eslint-plugin-security
eslint-plugin-sonarjs
eslint-plugin-tailwindcss
eslint-plugin-unicorn
```

## Get Started

1. Run `pnpm install`
1. Rename `.env.example` to `.env` and fill out the environmental variables.

Change `prisma/schema.prisma` to conform to your project's requirements.
Run `npx prisma migrate dev --name <name>` to migrate it.
Run `npx prisma generate` to regenerate the prisma client.
