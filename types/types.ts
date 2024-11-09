export interface ProductCard {
    id: number,
    name: string,
    description: string,
    category: string,
    quantity: number,
    measure: string,
    image: string,
}

export interface ProductCardProps {
    product: ProductCard;
    onClick: (product: ProductCard) => void;
}

export interface ModalProps {
    product: ProductCard;
    onClose: () => void;
}

export interface SidebarProps {
    showSidebar: boolean;
}