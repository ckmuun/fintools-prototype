
FROM quay.io/bitnami/golang AS builder

# Set necessary environmet variables needed for our image
ENV GO111MODULE=on \
    CGO_ENABLED=0 \
    GOOS=linux \
    GOARCH=amd64

# Move to workdir /build
WORKDIR /fintools-prototype

COPY go.mod .
COPY go.sum .
RUN go mod download


# Copy the code into the container
COPY . .
RUN pwd && ls -a
# OMITTED Run test
#RUN go test ./...

# Build backend application
RUN go build -o main .
RUN pwd && ls -a

# expose the required port
EXPOSE 8080


# Command to run the executable
CMD ["./main"]
