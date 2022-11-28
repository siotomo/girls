# README
This is Tinkering Project.

- jotoo

https://app.jooto.com/boards#832644?organization_id=303411

- slack

https://tinkeringcorp.slack.com/archives/C03H9LA38BF

- figma

https://www.figma.com/files/project/57761143

## Dockerでの起動手順
1. ポート番号はお好みに設定する

ブラウザで開く際のポート番号（`http://localhost:5001/`）は、docker-compose.yml上では5001に設定されているので、`http://localhost:3000/`でアクセスしたい場合は、以下のように書き換えましょう。

docker-compose.yml
```yml
ports:
 - '3000:3000'
```

2. Dockerを起動する

```bash
docker-compose up
```

3. `http://localhost:5001/`にアクセス！

Dockerが起動すると、RailsServerとwebpackのLiveReloadも起動するようになっているよ！

### Railsコンソールを開くには
1. ターミナルのタブをもう1つ開き、以下のコマンドでコンテナのbashに入る

```bash
docker-compose exec rails bash
```

2. Railsコンソールに入る

```bash
bundle exec rails c
```
