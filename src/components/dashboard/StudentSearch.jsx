import { useState } from "react";
import { Search, Loader2 } from "lucide-react";

const StudentSearch = ({ onSearch }) => {
  const [matricule, setMatricule] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const validateMatricule = (value) => {
    // Assuming matricule should be alphanumeric and at least 5 characters
    return /^[A-Za-z0-9]{5,}$/.test(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!matricule.trim()) {
      setError("Veuillez entrer un matricule");
      return;
    }

    if (!validateMatricule(matricule)) {
      setError(
        "Le matricule doit contenir au moins 5 caractères alphanumériques"
      );
      return;
    }

    setIsLoading(true);
    try {
      await onSearch(matricule);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={matricule}
            onChange={(e) => {
              setMatricule(e.target.value.toUpperCase());
              setError("");
            }}
            placeholder="Entrez le matricule de l'élève"
            className={`w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all
              ${
                error
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300"
              }
              ${isLoading ? "bg-gray-50" : "bg-white"}
            `}
            disabled={isLoading}
          />
        </div>

        {error && <p className="text-red-500 text-sm mt-1 ml-1">{error}</p>}

        <div className="flex gap-2 mt-2">
          <button
            type="submit"
            disabled={isLoading}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg 
              hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
              disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Recherche...</span>
              </>
            ) : (
              <>
                <Search className="w-5 h-5" />
                <span>Rechercher</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentSearch;
