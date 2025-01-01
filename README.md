# yusukenakanishi.com
プライベートブログのシステム構築

## backend
Cloudflare WorkersにデプロイするAPI

```
bun run dev:backend
```

## frontend
Cloudflare Pagesにデプロイするアプリケーション

```
bun run dev:frontend
```

### lint
```
bun run lint
bun run lint:fix
bun run lint:frontend
bun run lint:frontend:fix
bun run lint:backend
bun run lint:backend:fix
```

### format
```
bun run format
bun run format:fix
bun run format:frontend
bun run format:frontend:fix
bun run format:backend
bun run format:backend:fix
```

### check
```
bun run check
bun run check:frontend
bun run check:backend
```

### validate
```
bun run validate
```

### Github Actions lint
GitHub Actions のワークフローをチェックする

```
brew install actionlint
bun run actionlint
```
