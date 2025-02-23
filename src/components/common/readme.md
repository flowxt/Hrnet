# Composant Table React

Un composant de tableau React moderne et réutilisable avec des fonctionnalités avancées. Idéal pour l'affichage de données tabulaires avec tri, recherche et pagination.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)

## 📋 Caractéristiques

- ✨ Tri des colonnes (activable/désactivable)
- 🔍 Barre de recherche globale
- 📑 Pagination avancée
- 📱 Design responsive avec Tailwind CSS
- ♿ Accessibilité (ARIA) intégrée
- 🎨 Style moderne et épuré
- 🔄 Mise à jour automatique des données

## 🛠 Installation

1. Assurez-vous d'avoir les dépendances requises :

```bash
npm install @heroicons/react
```

2. Copiez le fichier `Table.jsx` dans votre dossier de composants :

```bash
cp Table.jsx src/components/common/
```

## 💻 Utilisation

```jsx
import Table from "./common/Table";

const MyComponent = () => {
  // Exemple de données
  const data = [
    { id: 1, name: "John Doe", age: 30 },
    { id: 2, name: "Jane Smith", age: 25 },
  ];

  // Configuration des colonnes
  const columns = [
    { Header: "Nom", accessor: "name" },
    { Header: "Âge", accessor: "age" },
  ];

  return (
    <Table
      data={data}
      columns={columns}
      pageSize={10}
      showGlobalFilter={true}
      enableSorting={true}
      ariaLabel="Mon tableau de données"
    />
  );
};
```

## ⚙️ Props

| Prop               | Type      | Défaut                 | Description                            |
| ------------------ | --------- | ---------------------- | -------------------------------------- |
| `data`             | `Array`   | Required               | Tableau d'objets contenant les données |
| `columns`          | `Array`   | Required               | Configuration des colonnes             |
| `pageSize`         | `Number`  | `10`                   | Nombre d'éléments par page             |
| `showGlobalFilter` | `Boolean` | `true`                 | Affichage de la barre de recherche     |
| `enableSorting`    | `Boolean` | `true`                 | Activation du tri des colonnes         |
| `ariaLabel`        | `String`  | `"Tableau de données"` | Label d'accessibilité                  |

## 🔧 Structure des données

### Format des données

```jsx
const data = [
  {
    id: 1,
    firstName: "John", // Prénom
    lastName: "Doe", // Nom de famille
    startDate: "2024-01-15", // Date d'embauche
    department: "Marketing", // Département
    dateOfBirth: "1990-05-20", // Date de naissance
    street: "123 Main St", // Rue
    city: "Paris", // Ville
    state: "IDF", // État/Région
    zipCode: "75001", // Code postal
  },
];
```

### Format des colonnes

```jsx
const columns = [
  {
    Header: "Prénom", // Titre de la colonne
    accessor: "firstName", // Clé correspondant aux données
  },
];
```

## 🎨 Personnalisation

Le composant utilise Tailwind CSS pour le styling. Vous pouvez personnaliser l'apparence en modifiant les classes Tailwind :

```jsx
// Exemple de personnalisation du tableau
<table className="min-w-full bg-custom-color shadow-custom">
```

## ♿ Accessibilité

Le composant intègre plusieurs fonctionnalités d'accessibilité :

- Rôles ARIA appropriés
- Labels descriptifs
- Navigation au clavier
- Structure sémantique

## 🔍 Fonctionnalités détaillées

### Recherche globale

- Filtre sur toutes les colonnes
- Mise à jour en temps réel
- Insensible à la casse

### Pagination

- Navigation première/dernière page
- Navigation page précédente/suivante
- Affichage du nombre total de pages

### Tri

- Tri ascendant/descendant
- Indicateurs visuels de tri
- Tri sur toutes les colonnes

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📝 Licence

MIT © [BARJON Florian]
