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