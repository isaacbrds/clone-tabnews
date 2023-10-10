function status(request, response) {
  return response
    .status(200)
    .json({ message: "Os alunos do curso.dev são foda!" });
}

export default status;
