COMPOSE := docker compose
SERVICE := portfolio-dev

.PHONY: install run stop down ps logs lint

install:
	$(COMPOSE) build $(SERVICE)

run:
	$(COMPOSE) up -d $(SERVICE)

stop:
	$(COMPOSE) stop

down:
	$(COMPOSE) down

ps:
	$(COMPOSE) ps

logs:
	$(COMPOSE) logs -f $(SERVICE)

lint:
	@set -e; \
		$(COMPOSE) up -d $(SERVICE); \
		trap '$(COMPOSE) stop $(SERVICE) >/dev/null' EXIT; \
		$(COMPOSE) exec -T $(SERVICE) npm run lint
