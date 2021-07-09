
FROM golang:alpine AS builder

# Set necessary environmet variables needed for our image
ENV GO111MODULE=on \
    CGO_ENABLED=0 \
    GOOS=linux \
    GOARCH=amd64

# Move to workdir /build
WORKDIR /fintools-prototype

# Copy and download dependency using go mod
COPY _resources ./_resources
# CMD ["ls --all | cat" , "cd engineImpl", "ls --all | cat", "cd ..", "cd _resources" , "ls --all | cat", "cd .. "]
COPY ui/ft-frontend/dist ./ui/ft-frontend/dist
COPY go.mod .
COPY go.sum .
RUN go mod download


# Copy the code into the container
COPY . .
RUN pwd && ls -a
# OMITTED Run test
#RUN go test ./...

# Build the application
RUN go build -o main .
RUN pwd && ls -a

# expose the required port
EXPOSE 8080

# Command to run the executable
CMD ["./main"]
