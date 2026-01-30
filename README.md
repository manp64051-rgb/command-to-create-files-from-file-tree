# command-to-create-files-from-file-tree

This file is a demo showing how to **create files and folders from a file structure** in one go. It’s useful for scaffolding a backend + frontend project quickly without manually creating everything in VS Code.

---

## Example File Tree

```
└── 📁 my-app/
    ├── 📁 backend/
    │   ├── 📁 src/
    │   │   ├── 📁 config/
    │   │   │   └── 📄 db.js
    │   │   ├── 📁 controllers/
    │   │   │   └── 📄 user.controller.js
    │   │   ├── 📁 middleware/
    │   │   │   └── 📄 auth.middleware.js
    │   │   ├── 📁 models/
    │   │   │   └── 📄 user.model.js
    │   │   ├── 📁 routes/
    │   │   │   └── 📄 user.routes.js
    │   │   ├── 📁 services/
    │   │   │   └── 📄 user.service.js
    │   │   ├── 📁 utils/
    │   │   │   └── 📄 logger.js
    │   │   ├── 📄 app.js
    │   │   └── 📄 server.js
    │   ├── 📁 tests/
    │   │   └── 📄 user.test.js
    │   ├── ⚙️ .dockerignore
    │   ├── 🐳 Dockerfile
    │   ├── ⚙️ package-lock.json
    │   └── ⚙️ package.json
    ├── 📁 frontend/
    │   ├── 📁 public/
    │   │   ├── 📄 favicon.ico
    │   │   └── 🌐 index.html
    │   ├── 📁 src/
    │   │   ├── 📁 api/
    │   │   │   └── 📄 api.js
    │   │   ├── 📁 components/
    │   │   │   └── 📄 Button.jsx
    │   │   ├── 📁 context/
    │   │   │   └── 📄 AuthContext.js
    │   │   ├── 📁 hooks/
    │   │   │   └── 📄 useAuth.js
    │   │   ├── 📁 pages/
    │   │   │   └── 📄 Home.jsx
    │   │   ├── 📁 styles/
    │   │   │   └── 🎨 main.css
    │   │   ├── 📁 utils/
    │   │   │   └── 📄 helpers.js
    │   │   ├── 📄 App.js
    │   │   └── 📄 index.js
    │   ├── ⚙️ .dockerignore
    │   ├── 🐳 Dockerfile
    │   ├── ⚙️ package-lock.json
    │   └── ⚙️ package.json
    ├── 📝 README.md
    └── ⚙️ docker-compose.yml
```

---

## Create This Structure Using Terminal (Windows / PowerShell)

Copy all commands below into VS Code terminal:

```powershell
# root
mkdir my-app
cd my-app
ni docker-compose.yml, .env, README.md

# backend
mkdir backend, backend\src, backend\tests
ni backend\Dockerfile, backend\.dockerignore, backend\package.json, backend\package-lock.json
ni backend\tests\user.test.js

mkdir backend\src\config, backend\src\controllers, backend\src\routes, backend\src\models, backend\src\middleware, backend\src\services, backend\src\utils
ni backend\src\config\db.js
ni backend\src\controllers\user.controller.js
ni backend\src\routes\user.routes.js
ni backend\src\models\user.model.js
ni backend\src\middleware\auth.middleware.js
ni backend\src\services\user.service.js
ni backend\src\utils\logger.js
ni backend\src\app.js, backend\src\server.js

# frontend
mkdir frontend, frontend\public, frontend\src
ni frontend\Dockerfile, frontend\.dockerignore, frontend\package.json, frontend\package-lock.json
ni frontend\public\index.html, frontend\public\favicon.ico

mkdir frontend\src\api, frontend\src\components, frontend\src\pages, frontend\src\hooks, frontend\src\context, frontend\src\styles, frontend\src\utils
ni frontend\src\api\api.js
ni frontend\src\components\Button.jsx
ni frontend\src\pages\Home.jsx
ni frontend\src\hooks\useAuth.js
ni frontend\src\context\AuthContext.js
ni frontend\src\styles\main.css
ni frontend\src\utils\helpers.js
ni frontend\src\App.js, frontend\src\index.js
```

---

## Alternative: Generate Structure With PlopJS

Instead of typing commands manually, you can scaffold this structure with **PlopJS**.

### 1. Install Plop globally
```bash
npm install -g plop
```

### 2. Create `plopfile.js` in your project root
```javascript
module.exports = function (plop) {
  // Create a file or folder generator
  plop.setGenerator('project', {
    description: 'Scaffold backend + frontend structure',
    actions: [
      // Root files
      { type: 'add', path: 'docker-compose.yml', templateFile: 'templates/docker-compose.yml.hbs' },
      { type: 'add', path: '.env', template: '' },
      { type: 'add', path: 'README.md', templateFile: 'templates/README.md.hbs' },

      // Backend
      { type: 'add', path: 'backend/Dockerfile', template: '' },
      { type: 'add', path: 'backend/.dockerignore', template: '' },
      { type: 'add', path: 'backend/package.json', template: '' },
      { type: 'add', path: 'backend/package-lock.json', template: '' },
      { type: 'add', path: 'backend/src/config/db.js', template: '' },
      { type: 'add', path: 'backend/src/controllers/user.controller.js', template: '' },
      { type: 'add', path: 'backend/src/middleware/auth.middleware.js', template: '' },
      { type: 'add', path: 'backend/src/models/user.model.js', template: '' },
      { type: 'add', path: 'backend/src/routes/user.routes.js', template: '' },
      { type: 'add', path: 'backend/src/services/user.service.js', template: '' },
      { type: 'add', path: 'backend/src/utils/logger.js', template: '' },
      { type: 'add', path: 'backend/src/app.js', template: '' },
      { type: 'add', path: 'backend/src/server.js', template: '' },
      { type: 'add', path: 'backend/tests/user.test.js', template: '' },

      // Frontend
      { type: 'add', path: 'frontend/Dockerfile', template: '' },
      { type: 'add', path: 'frontend/.dockerignore', template: '' },
      { type: 'add', path: 'frontend/package.json', template: '' },
      { type: 'add', path: 'frontend/package-lock.json', template: '' },
      { type: 'add', path: 'frontend/src/api/api.js', template: '' },
      { type: 'add', path: 'frontend/src/components/Button.jsx', template: '' },
      { type: 'add', path: 'frontend/src/context/AuthContext.js', template: '' },
      { type: 'add', path: 'frontend/src/hooks/useAuth.js', template: '' },
      { type: 'add', path: 'frontend/src/pages/Home.jsx', template: '' },
      { type: 'add', path: 'frontend/src/styles/main.css', template: '' },
      { type: 'add', path: 'frontend/src/utils/helpers.js', template: '' },
      { type: 'add', path: 'frontend/src/App.js', template: '' },
      { type: 'add', path: 'frontend/src/index.js', template: '' },
      { type: 'add', path: 'frontend/public/index.html', template: '' },
      { type: 'add', path: 'frontend/public/favicon.ico', template: '' }
    ]
  });
};
```

### 3. Run Plop
```bash
plop project
```

> This will automatically create the **entire folder structure** in one command.
