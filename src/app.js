import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

// CORS
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))

// Body parsers
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))

// Static files
app.use(express.static("public"))

// Cookies
app.use(cookieParser())

export { app }



//jab bhi aap middleware use kar rahe ho most of the time 
//aap app.use() ki help se kar rahe ho