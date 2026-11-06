import { useParams } from 'react-router'; // Hook useParams para obtener los parámetros de la URL
import useProduct from '../hooks/useProducts'; // Hook personalizado para obtener los detalles del producto
import AppBar from '../components/Appbar';   // Componente AppBar
import Footer from '../components/Footer';  // Componente Footer 

const ProductDetails = () => {
    const { product } = useParams(); // Obtiene el ID del producto de los parámetros de la URL
    const { loading, products, error } = useProduct(`https://fakestoreapi.com/products/${product}`); // Hook personalizado para obtener los detalles del producto

    if (loading) return <div className="text-center mt-10">Loading...</div>; // Muestra un mensaje de carga mientras se obtienen los datos
    if (error) return <div className="text-center mt-10 text-red-500">Error loading product details.</div>; // Muestra un mensaje de error si ocurre un problema al cargar los datos

    return (
        <div className="flex flex-col min-h-screen">
            <AppBar></AppBar> {/* Componente AppBar */}
            <main className="flex-grid max-w-4xl mx-auto p-6">
                <div className="flex flex-col md:flex-row items-center">
                    <img
                        src={products?.image}
                        alt={products?.title}
                        className="w-64 h-64 object-contain mb-6 md:mb-0 md:mr-6"
                    />
                    <div>
                        <h1 className="text-2xl font-bold mb-4">{products?.title}</h1>
                        <p className="text-gray-700 mb-4">{products?.description}</p>
                        <p className="text-lg font-semibold mb-4">Price: ${products?.price}</p>
                        <p className="text-sm text-gray-500">Category: {products?.category}</p>
                        <div className="flex items-center mt-4">
                            <span className="text-yellow-500 font-bold">{products?.rating.rate}</span>
                            <span className="ml-2 text-gray-600">({products?.rating.count} reviews)</span>
                        </div>
                    </div>
                </div>
            </main>
            <Footer></Footer> {/* Componente Footer */}
        </div>
    );
};

export default ProductDetails;