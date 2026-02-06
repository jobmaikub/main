// import { useState } from "react";
// import { Search, Plus, Pencil, Trash2 } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { 
//   Table, 
//   TableBody, 
//   TableCell, 
//   TableHead, 
//   TableHeader, 
//   TableRow 
// } from "@/components/ui/table";
// import { newsData, NewsItem } from "@/data/newsData";
// import { AddNewsSheet, NewsFormData } from "./AddNewsSheet";
// import { EditNewsSheet } from "./EditNewsSheet";

// export function NewsTable() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [news, setNews] = useState<NewsItem[]>(newsData);

//   // State for Add Sheet
//   const [isAddSheetOpen, setIsAddSheetOpen] = useState(false);

//   // State for Edit Sheet
//   const [isEditSheetOpen, setIsEditSheetOpen] = useState(false);
//   const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

//   const filteredNews = news.filter(
//     (item) =>
//       item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       item.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       item.source.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleDelete = (id: number) => {
//     setNews(news.filter((item) => item.id !== id));
//   };

//   const handleAddNews = (data: NewsFormData) => {
//     const newEntry: NewsItem = {
//       id: Math.max(...news.map((n) => n.id), 0) + 1,
//       title: data.title,
//       industry: data.industry,
//       source: data.sourceName,
//       date: data.date, // Captured from AddNewsSheet
//       image: data.imageUrl || "https://images.unsplash.com/photo-1504711432869-53c20f1b290e?w=400",
//     };
//     setNews([newEntry, ...news]);
//   };

//   const handleEditClick = (item: NewsItem) => {
//     setSelectedNews(item);
//     setIsEditSheetOpen(true);
//   };

//   const handleUpdateNews = (updatedItem: NewsItem) => {
//     setNews(news.map((n) => (n.id === updatedItem.id ? updatedItem : n)));
//   };

//   return (
//     <div className="space-y-6">
//       {/* Header Section */}
//       <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//         <h1 className="text-3xl font-bold text-foreground">News</h1>

//         <div className="flex items-center gap-3">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
//             <Input
//               placeholder="Search..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-[200px] pl-9 bg-[#FFFFFF]"
//             />
//           </div>
//           <Button 
//             className="gap-2 bg-[#4A5DF9] hover:bg-[#4A5DF9]/90 text-white border-none shadow-sm"
//             onClick={() => setIsAddSheetOpen(true)}
//           >
//             <Plus className="h-4 w-4" />
//             Add New
//           </Button>
//         </div>
//       </div>

//       {/* Sheet Components */}
//       <AddNewsSheet 
//         open={isAddSheetOpen} 
//         onOpenChange={setIsAddSheetOpen} 
//         onSubmit={handleAddNews} 
//       />

//       <EditNewsSheet 
//         open={isEditSheetOpen} 
//         onOpenChange={setIsEditSheetOpen} 
//         onSubmit={handleUpdateNews} 
//         newsItem={selectedNews} 
//       />

//       {/* Table Section */}
//       <div className="overflow-hidden rounded-lg border border-border">
//         <Table>
//           <TableHeader>
//             <TableRow className="bg-table-header hover:bg-table-header">
//               <TableHead className="text-table-header-foreground font-semibold">Image</TableHead>
//               <TableHead className="text-table-header-foreground font-semibold">Title</TableHead>
//               <TableHead className="text-table-header-foreground font-semibold">Industry</TableHead>
//               <TableHead className="text-table-header-foreground font-semibold">Date</TableHead>
//               <TableHead className="text-table-header-foreground font-semibold">Source</TableHead>
//               <TableHead className="text-table-header-foreground font-semibold text-center">Edit</TableHead>
//               <TableHead className="text-table-header-foreground font-semibold text-center">Delete</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {filteredNews.map((item) => (
//               <TableRow 
//                 key={item.id} 
//                 className="bg-[#FFFFFF] hover:bg-[#F9FAFB] transition-colors border-b"
//               >
//                 <TableCell>
//                   <div className="h-12 w-20 overflow-hidden rounded-md bg-muted">
//                     <img 
//                       src={item.image} 
//                       alt={item.title}
//                       className="h-full w-full object-cover"
//                     />
//                   </div>
//                 </TableCell>
//                 <TableCell className="font-medium max-w-[300px]">{item.title}</TableCell>
//                 <TableCell className="text-muted-foreground">{item.industry}</TableCell>
//                 <TableCell className="text-muted-foreground whitespace-nowrap">{item.date}</TableCell>
//                 <TableCell className="text-primary font-medium">{item.source}</TableCell>
//                 <TableCell className="text-center">
//                   <Button 
//                     variant="ghost" 
//                     size="icon" 
//                     className="h-8 w-8 text-muted-foreground hover:text-primary hover:bg-transparent"
//                     onClick={() => handleEditClick(item)}
//                   >
//                     <Pencil className="h-4 w-4" />
//                   </Button>
//                 </TableCell>
//                 <TableCell className="text-center">
//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     className="text-destructive hover:bg-transparent hover:text-destructive"
//                     onClick={() => handleDelete(item.id)}
//                   >
//                     <Trash2 className="h-4 w-4" />
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { Search, Plus, Pencil, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { AddNewsSheet, NewsFormData } from "./AddNewsSheet";
import { EditNewsSheet } from "./EditNewsSheet";
import {
  getNews,
  createNews,
  updateNews,
  deleteNews,
  News,
} from "@/lib/news.api";

export function NewsTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);

  // Sheet state
  const [isAddSheetOpen, setIsAddSheetOpen] = useState(false);
  const [isEditSheetOpen, setIsEditSheetOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState<News | null>(null);

  // 🔹 Fetch news
  useEffect(() => {
    getNews()
      .then(setNews)
      .finally(() => setLoading(false));
  }, []);

  // 🔹 Search
  const filteredNews = news.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      String(item.industry).toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.source_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 🔹 Delete
  const handleDelete = async (id: number) => {
    await deleteNews(id);
    setNews((prev) => prev.filter((n) => n.news_id !== id));
  };

  // 🔹 Add
  const handleAddNews = async (data: NewsFormData) => {
    const created = await createNews({
      title: data.title,
      summary: data.summary,
      industry: data.industry,
      image_url: data.imageUrl,
      source_url: data.sourceUrl,
      source_name: data.sourceName,
    });

    setNews((prev) => [created, ...prev]);
  };

  // 🔹 Edit
  const handleEditClick = (item: News) => {
    setSelectedNews(item);
    setIsEditSheetOpen(true);
  };

  const handleUpdateNews = async (data: Partial<News>) => {
    if (!selectedNews) return;

    const result = await updateNews(selectedNews.news_id, data);

    setNews((prev) =>
      prev.map((n) =>
        n.news_id === result.news_id ? result : n
      )
    );

    setIsEditSheetOpen(false);
    setSelectedNews(null);
  };

  if (loading) {
    return <div className="text-muted-foreground">Loading news...</div>;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold">News</h1>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[200px] pl-9 bg-white"
            />
          </div>

          <Button
            className="gap-2 bg-[#4A5DF9] text-white"
            onClick={() => setIsAddSheetOpen(true)}
          >
            <Plus className="h-4 w-4" />
            Add New
          </Button>
        </div>
      </div>

      {/* Sheets */}
      <AddNewsSheet
        open={isAddSheetOpen}
        onOpenChange={setIsAddSheetOpen}
        onSubmit={handleAddNews}
      />

      <EditNewsSheet
        open={isEditSheetOpen}
        onOpenChange={setIsEditSheetOpen}
        onSubmit={handleUpdateNews}
        newsItem={selectedNews}
      />

      {/* Table */}
      <div className="overflow-hidden rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Industry</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Source</TableHead>
              <TableHead className="text-center">Edit</TableHead>
              <TableHead className="text-center">Delete</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredNews.map((item) => (
              <TableRow key={item.news_id}>
                <TableCell>
                  <img
                    src={item.image_url}
                    className="h-12 w-20 rounded object-cover"
                  />
                </TableCell>

                <TableCell className="font-medium">
                  {item.title}
                </TableCell>

                <TableCell className="text-[#4A5DF9] font-medium">
                  {item.industry}
                </TableCell>

                <TableCell className="text-muted-foreground">
                  {new Date(item.created_at).toLocaleDateString()}
                </TableCell>

                <TableCell className="text-muted-foreground">
                  {item.source_name}
                </TableCell>

                <TableCell className="text-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleEditClick(item)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                </TableCell>

                <TableCell className="text-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-destructive"
                    onClick={() => handleDelete(item.news_id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
