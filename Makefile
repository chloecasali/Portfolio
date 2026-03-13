COMPOSE := docker compose
SERVICE := portfolio-dev

install:
	$(COMPOSE) build

run:
	$(COMPOSE) up -d

stop:
	$(COMPOSE) stop

down:
	$(COMPOSE) down

ps:
	$(COMPOSE) ps

logs:
	$(COMPOSE) logs -f $(SERVICE)

lint:
	$(COMPOSE) run --rm $(SERVICE) npm run lint

test:
	$(COMPOSE) run --rm $(SERVICE) npm run test
