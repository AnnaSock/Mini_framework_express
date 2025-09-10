# Mini_framework_express

Ce projet est un mini framework basé sur Express.js, TypeScript et Prisma pour la gestion de tâches. Il propose une structure simple et évolutive pour démarrer rapidement une API RESTful connectée à une base de données MySQL.

## Fonctionnalités principales

- **API Express** : Serveur HTTP rapide et minimaliste.
- **TypeScript** : Typage statique pour plus de robustesse.
- **Prisma ORM** : Accès à la base de données MySQL avec migrations et génération automatique du client.
- **Gestion des variables d'environnement** avec dotenv.
- **Structure de repository** pour l’accès aux données.

## Structure du projet

```
tache/
├── src/
│   ├── config/
│   │   └── config/env.ts         # Chargement des variables d'environnement
│   ├── repository/
│   │   └── repository/IRepository.ts # Interface générique pour les repositories
│   └── index.ts           # Point d'entrée principal de l'application
├── prisma/
│   ├── schema.prisma      # Modèle de données Prisma
│   └── migrations/        # Dossiers de migration SQL
├── .env                   # Variables d'environnement (à ne pas versionner)
├── .env.example           # Exemple de variables d'environnement
├── package.json           # Dépendances et scripts npm
├── tsconfig.json          # Configuration TypeScript
└── README.md              # Documentation
```

## Installation

1. **Cloner le dépôt**
	```bash
	git clone <repo-url>
	cd tache
	```

2. **Installer les dépendances**
	```bash
	npm install
	```

3. **Configurer la base de données**
	- Copier `.env.example` en `.env` et renseigner les variables :
	  ```
	  DATABASE_URL="mysql://user:password@localhost:3306/tache"
	  PORT=3000
	  ```

4. **Lancer les migrations Prisma**
	```bash
	npm run migrate
	```

5. **Générer le client Prisma**
	```bash
	npm run generate
	```

6. **Démarrer le serveur en développement**
	```bash
	npm run dev
	```

## Utilisation

- Accéder à l’API de test :
  ```
  GET http://localhost:3000/health
  ```
  Réponse :
  ```json
  { "message": "Bienvenue" }
  ```

## Modèle de données

Le modèle principal est `Taches` :

```prisma
model Taches {
  id          Int    @id @default(autoincrement())
  titre       String
  description String
  statut      Etat   @default(EN_COURS)
}

enum Etat {
  EN_COURS
  TERMINER
  A_FAIRE
}
```

## Interface Repository

Pour faciliter l’accès aux données, une interface générique est définie :

```ts
export interface IRepository<T> { 
	 findAll(): Promise<T>
	 findById(id: number): Promise<T | null>
	 create(data: Omit<T, "id">): Promise<T>
	 update(id: number, data: Partial<T>): Promise<T>
	 delete(id: number): Promise<void>
}
```

## Scripts npm utiles

- `npm run dev` : Démarre le serveur en mode développement.
- `npm run build` : Compile le projet TypeScript.
- `npm run start` : Lance le serveur compilé.
- `npm run migrate` : Applique les migrations Prisma.
- `npm run generate` : Génère le client Prisma.

## Configuration TypeScript

Le projet est strictement typé et prêt pour les dernières fonctionnalités ECMAScript. Voir `tsconfig.json`.

## Contribution

1. Forkez le projet
2. Créez une branche (`git checkout -b feature/ma-feature`)
3. Commitez vos modifications (`git commit -am 'Ajout d'une feature'`)
4. Poussez la branche (`git push origin feature/ma-feature`)
5. Ouvrez une Pull Request

---

**Auteur** :  
Mini framework Express/TypeScript/Prisma pour la gestion de tâches.
