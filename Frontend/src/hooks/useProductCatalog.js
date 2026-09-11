import { useDeferredValue, useState } from 'react';
import { products } from '../data/products';

const DEFAULT_CATEGORY = 'All Products';
const DEFAULT_CROP = 'All';
const DEFAULT_APPLICATION = 'All';
const DEFAULT_PRODUCT_TYPE = 'All';

export function useProductCatalog(initialState = {}) {
  const [searchValue, setSearchValue] = useState(initialState.searchValue ?? '');
  const [selectedCategory, setSelectedCategory] = useState(
    initialState.selectedCategory ?? DEFAULT_CATEGORY
  );
  const [selectedCropType, setSelectedCropType] = useState(
    initialState.selectedCropType ?? DEFAULT_CROP
  );
  const [selectedApplication, setSelectedApplication] = useState(
    initialState.selectedApplication ?? DEFAULT_APPLICATION
  );
  const [selectedProductType, setSelectedProductType] = useState(
    initialState.selectedProductType ?? DEFAULT_PRODUCT_TYPE
  );

  const deferredSearchValue = useDeferredValue(searchValue);
  const normalizedSearch = deferredSearchValue.trim().toLowerCase();

  const filteredProducts = products.filter((product) => {
    const searchableProductText = [
      product.name,
      product.category,
      product.cropType,
      product.application,
      product.productType,
      product.description,
      product.benefit,
      ...product.cropSuitability,
    ]
      .join(' ')
      .toLowerCase();
    const matchesSearch =
      normalizedSearch.length === 0 || searchableProductText.includes(normalizedSearch);
    const matchesCategory =
      selectedCategory === DEFAULT_CATEGORY || product.category === selectedCategory;
    const matchesCrop = selectedCropType === DEFAULT_CROP || product.cropType === selectedCropType;
    const matchesApplication =
      selectedApplication === DEFAULT_APPLICATION || product.application === selectedApplication;
    const matchesType =
      selectedProductType === DEFAULT_PRODUCT_TYPE || product.productType === selectedProductType;

    return matchesSearch && matchesCategory && matchesCrop && matchesApplication && matchesType;
  });

  const clearSearch = () => {
    setSearchValue('');
  };

  const clearFilters = () => {
    setSelectedCategory(DEFAULT_CATEGORY);
    setSelectedCropType(DEFAULT_CROP);
    setSelectedApplication(DEFAULT_APPLICATION);
    setSelectedProductType(DEFAULT_PRODUCT_TYPE);
  };

  const resetAll = () => {
    clearSearch();
    clearFilters();
  };

  const hasSearch = searchValue.trim().length > 0;
  const hasFilters =
    selectedCategory !== DEFAULT_CATEGORY ||
    selectedCropType !== DEFAULT_CROP ||
    selectedApplication !== DEFAULT_APPLICATION ||
    selectedProductType !== DEFAULT_PRODUCT_TYPE;

  const activeFilterCount = [
    selectedCategory !== DEFAULT_CATEGORY,
    selectedCropType !== DEFAULT_CROP,
    selectedApplication !== DEFAULT_APPLICATION,
    selectedProductType !== DEFAULT_PRODUCT_TYPE,
  ].filter(Boolean).length;

  return {
    searchValue,
    setSearchValue,
    selectedCategory,
    setSelectedCategory,
    selectedCropType,
    setSelectedCropType,
    selectedApplication,
    setSelectedApplication,
    selectedProductType,
    setSelectedProductType,
    filteredProducts,
    clearSearch,
    clearFilters,
    resetAll,
    hasSearch,
    hasFilters,
    activeFilterCount,
  };
}
