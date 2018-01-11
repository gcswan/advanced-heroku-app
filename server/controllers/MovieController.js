import MovieModel from "../models/MovieModel"


export function create(request, response) {
    const movie = new MovieModel(request.body)
    const movieWithUser = Object.assign(movie, {userId : request.user._id});
    movieWithUser.save()
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
    // console.log("this is the list controller logging the user's request id: ", request.user._id);
    
    MovieModel.find({userId: request.user._id}).exec()
    .then((movies) => {
      console.log("this is the list controller logging the movies found: ", movies)
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