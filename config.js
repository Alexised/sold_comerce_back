const config = {
    application: {
        cors: {
            server: [
                {
                    origin: "*", // (*) en caso que sea acceso libre
                    credentials: true
                }
            ]
        },
    }
}