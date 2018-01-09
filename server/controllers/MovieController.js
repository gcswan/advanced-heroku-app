import MovieModel from "../models/MovieModel"


export function create(request, response) {
    const movie = new MovieModel(request.body)
    movie.save()
    .then((movie) => {
      return response.json(movie)
    });
  }

  export function show(request, response) {
    let id = request.params.id;
    MovieModel.findById(id).exec()
    .then((movie) => {
      return response.json(movie);
    });
  }

  export function list(request, response) {
    MovieModel.find({}).exec()
    .then((movies) => {
      return response.json(movies)
    });
  }

  export function remove(request, response) {
    let id = request.params.id;
    console.log("remove controller logging id: ", id)
    MovieModel.findByIdAndRemove(id).exec()
    .then((movie) => {
      return response.json(movie)
    })
}