# Start development infrastructure
infra-start:
    docker compose up --build -d

# Stop development infrastructure
infra-stop:
    docker compose stop

infra-clean:
    docker compose down -v 
