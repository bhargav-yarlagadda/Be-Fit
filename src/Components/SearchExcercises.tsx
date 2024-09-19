import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

interface Exercise {
  id: string;
  name: string;
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  instructions: string[];
  secondaryMuscles: string[];
  target: string;
}

const SearchExercises = () => {
  const [search, setSearch] = useState<string>("");
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [bodyParts, setBodyParts] = useState<string[]>([]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.toLowerCase());
  };

  useEffect(() => {
    const fetchExerciseData = async () => {
      const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': import.meta.env.VITE_REACT_GYM_API_KEY,
          'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
        }
      };

      try {
        const bodyPartsData: string[] = await fetchData<string[]>(url, options);
        setBodyParts(bodyPartsData);
        console.log(bodyPartsData)
      } catch (error) {
        console.error('Error fetching body parts:', error);
      }
    };

    fetchExerciseData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const url = 'https://exercisedb.p.rapidapi.com/exercises';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': import.meta.env.VITE_REACT_GYM_API_KEY,
          'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
        }
      };

      try {
        const exerciseData = await fetchData<Exercise[]>(url, options);
        const searchedExercises = exerciseData.filter(exercise =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search)
        );
        setExercises(searchedExercises);
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    }
  };

  return (
    <div className="flex w-full items-center p-4 min-h-[90vh] flex-col rounded-lg shadow-md">
      <span className="text-4xl sm:text-6xl font-semibold font-mono text-gray-900 text-center">
        Awesome Exercises <br /> You Should Know
      </span>
      <div className="flex flex-col rounded-xl max-w-[400px] mt-8 sm:flex-row sm:w-full sm:max-w-md">
        <input
          type="text"
          placeholder="Search exercises..."
          value={search}
          onChange={handleChange}
          className="flex-grow p-2 text-[20px] text-gray-600 border rounded-s-md border-gray-300 focus:outline-none transition duration-300 ease-in-out mb-4 sm:mb-0"
        />
        <button
          onClick={handleSearch}
          className="bg-red-600 text-white font-semibold rounded-e-md py-2 px-4 hover:bg-red-700 transition duration-300 ease-in-out"
        >
          Search
        </button>
      </div>
      <HorizontalScrollbar data={bodyParts} />


      <div className="mt-8 w-full">
        {exercises.map(exercise => (
          <div key={exercise.id} className="p-4 border rounded-lg shadow-md mb-4">
            <img src={exercise.gifUrl} alt={exercise.name} className="w-full h-auto mb-2" />
            <h3 className="text-xl font-semibold mb-2">{exercise.name}</h3>
            <p><strong>Body Part:</strong> {exercise.bodyPart}</p>
            <p><strong>Target:</strong> {exercise.target}</p>
            <p><strong>Equipment:</strong> {exercise.equipment}</p>
            <div>
              <strong>Instructions:</strong>
              <ul>
                {exercise.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchExercises;
