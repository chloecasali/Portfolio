COMPOSE := docker compose
SERVICE := portfolio-dev

.PHONY: install run stop ps logs

install:
	$(COMPOSE) build $(SERVICE)

run:
	$(COMPOSE) up -d $(SERVICE)

stop:
	$(COMPOSE) down

ps:
	$(COMPOSE) ps

logs:
	$(COMPOSE) logs -f $(SERVICE)
