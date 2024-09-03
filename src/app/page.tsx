import Card from "@/components/Card";
import PaginationButton from "@/components/PaginationButton";
import SearchBar from "@/components/SearchBar";

export default function Home() {
    return (
        <div className="h-full w-full max-w-[1200px] mx-auto pt-6  px-3">
          <SearchBar />
            <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                <div className="flex justify-center">
                    <Card
                        title="gdfgfdaafgaga sdfdsf sdfdsf sddfdsfsdfs"
                        author="dsaafsfass"
                    />
                </div>
                <div className="flex justify-center">
                    <Card
                        title="gdfgfdaafgaga sdfdsf sdfdsf sddfdsfsdfsdfafdsa dsfsda sdfdsaf sdfsa fdsafsda"
                        author="dsaafsfass"
                    />
                </div>
                <div className="flex justify-center">
                    <Card
                        title="gdfgfdaafgaga"
                        author="dsaafsfass"
                    />
                </div>
                <div className="flex justify-center">
                    <Card
                        title="gdfgfdaafgaga sdfdsf sdfdsf sddfdsfsdfs"
                        author="dsaafsfass"
                    />
                </div>
                <div className="flex justify-center">
                    <Card
                        title="gdfgfdaafgaga sdfdsf sdfdsf sddfdsfsdfs"
                        author="dsaafsfass"
                    />
                </div>
                <div className="flex justify-center">
                    <Card
                        title="gdfgfdaafgaga sdfdsf sdfdsf sddfdsfsdfs dfsafdsa dsfdsfsfs fdsfas sdfsd "
                        author="dsaafsfass"
                    />
                </div>
            </div>
            <PaginationButton />
        </div>
    );
}
