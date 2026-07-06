from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)






movies = [
    {"id":1, "name":"Interstellar","rating":9.0},
    {"id":2, "name":"Inception","rating":8.8},
    {"id":3, "name":"Oppenheimer","rating":8.5},
    {"id":4, "name":"The Dark Knight","rating":8.0},
    {"id":5, "name":"Avengers Endgame","rating":9.0},
    {"id":6, "name":"Spider-Man No Way Home","rating":9.5}


]
    

@app.get("/")
def home():
    return{"message": "Welcome to Movie Hub API"}
    
@app.get("/movies")  
def get_movies():
    return movies

