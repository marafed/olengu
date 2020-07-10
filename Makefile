start:
	git pull
	docker-compose down
	docker-compose up -d
stop:
	docker-compose down
log-backend:
	docker-compose logs --follow backend
log-frontend:
	docker-compose logs --follow frontend
log-db:
	docker-compose logs --follow db