import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import axios from 'axios';
import { CategoryComponent } from '@components/CategoryComponent';

interface Category {
    id: number;
    name: string;
}

export function ProductList() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/categories')
      .then(response => {
        setCategories(response.data);
      });
  }, []);

  const displayedCategories = categories.slice(0,5);

  return (
    <FlatList
      data={displayedCategories}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <CategoryComponent category={item} />
      )}
    />
  );
}
