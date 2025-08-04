import React from 'react';

interface CatalogItem {
  id: string;
  title: string;
  description: string;
}

interface CatalogCategory {
  id: string;
  title: string;
  items: CatalogItem[];
}

interface CatalogSidebarProps {
  showCatalog: boolean;
  catalogData: CatalogCategory[];
  showSubcategoryDetails: (id: string) => void;
}

const CatalogSidebar = ({ showCatalog, catalogData, showSubcategoryDetails }: CatalogSidebarProps) => {
  return (
    <div id="catalog-sidebar" className={showCatalog ? 'active' : ''}>
      <div className="catalog-title">Catálogo de Ideas de Proyectos</div>
      <div className="catalog-categories">
        {catalogData.map((category) => (
          <div key={category.id} className="category">
            <div className="category-title">{category.title}</div>
            <div className="category-items">
              {category.items.map((item) => (
                <div 
                  key={item.id} 
                  className="category-item" 
                  onClick={() => showSubcategoryDetails(item.id)}
                >
                  {item.title} ({item.description})
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogSidebar;