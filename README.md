# Proxy ✨
A simple, easy-to-set-up reverse proxy, designed for seamless deployment.

## Deployment 🚀

### ☝️ Prerequisites  
- **Docker** installed (see below for installation)
- **Git** installed

### 1️⃣ Get Docker
This installer is [officially by Docker](https://github.com/docker/docker-install), no shady stuff here.
```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

### 2️⃣ Clone this repo
```
git clone https://github.com/chlkrisz/proxy.git && cd proxy
```

### 3️⃣ Configure environmental variables
```
cp .env.example .env
vi .env # Use any text editor to modify .env
```

### 4️⃣ Start the proxy
```
sudo docker compose up --build -d
```

## Usage 📌
After deployment and proper configuration, your reverse proxy should be up and running. Modify `.env` as needed.