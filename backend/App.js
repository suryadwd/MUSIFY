import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import { clerkMiddleware } from '@clerk/express'
import { dbConnect } from './config/db.js'
import userRoutes from "./routes/user.route.js"
import adminRoutes from "./routes/admin.route.js"
import authRoutes from "./routes/auth.route.js"
import songRoutes from "./routes/song.route.js"
import albumRoutes from "./routes/album.route.js"
import statsRoutes from "./routes/stat.route.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(clerkMiddleware())

app.use("api/users", userRoutes)
app.use("api/auth", authRoutes)
app.use("api/admin", adminRoutes)
app.use("api/songs", songRoutes)
app.use("api/album", albumRoutes)
app.use("api/stats", statsRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
    dbConnect()
})