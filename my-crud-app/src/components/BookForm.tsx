import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createBook, getBookById, updateBook } from "../services/api";

interface Book {
  titulo: string;
  autor: string;
  ano: number;
  genero: string;
  numeroPaginas: number;
}

function BookForm() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [Book, setBook] = useState<Book>({
    titulo: "",
    autor: "",
    ano: 0,
    genero: "",
    numeroPaginas: 0,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (id) {
      loadBook();
    }
  }, [id]);

  const loadBook = async () => {
    try {
      const response = await getBookById(id as string);
      setBook(response.data);
    } catch (error) {
      console.error("Erro ao carregar informações de produtos", error);
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!Book.titulo) newErrors.titulo = "Título é obrigatório.";
    if (!Book.autor) newErrors.autor = "Autor é obrigatório.";
    if (Book.ano <= 0) newErrors.ano = "Ano deve ser maior que 0.";
    if (!Book.genero) newErrors.genero = "Gênero é obrigatório.";
    if (Book.numeroPaginas <= 0)
      newErrors.numeroPaginas = "Número de páginas deve ser maior que 0.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBook({
      ...Book,
      [e.target.name]:
        e.target.type === "number"
          ? parseFloat(e.target.value)
          : e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      try {
        if (id) {
          await updateBook(id, Book);
        } else {
          await createBook(Book);
        }
        navigate("/");
      } catch (error) {
        console.error("Error saving Book", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Título</label>
        <input
          type="text"
          name="titulo"
          value={Book.titulo}
          onChange={handleChange}
        />
        {errors.titulo && <p className="error">{errors.titulo}</p>}
      </div>
      <div>
        <label>Autor</label>
        <input
          type="text"
          name="autor"
          value={Book.autor}
          onChange={handleChange}
        />
        {errors.autor && <p className="error">{errors.autor}</p>}
      </div>
      <div>
        <label>Ano de publicação</label>
        <input
          type="number"
          name="ano"
          value={Book.ano}
          onChange={handleChange}
        />
        {errors.ano && <p className="error">{errors.ano}</p>}
      </div>
      <div>
        <label>Gênero</label>
        <input
          type="text"
          name="genero"
          value={Book.genero}
          onChange={handleChange}
        />
        {errors.genero && <p className="error">{errors.genero}</p>}
      </div>
      <div>
        <label>Número de páginas</label>
        <input
          type="number"
          name="numeroPaginas"
          value={Book.numeroPaginas}
          onChange={handleChange}
        />
        {errors.numeroPaginas && (
          <p className="error">{errors.numeroPaginas}</p>
        )}
      </div>
      <button type="submit" className="save">Salvar</button>
    </form>
  );
}

export default BookForm;