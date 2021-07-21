from .kMeansCluster import shops_kmeans_blueprint
from .shops_resource import shops_blueprint
from .user_resource import users_blueprint
from .authentication import auth_blueprint
def initiate_app(app, **kwargs):
    app.register_blueprint(shops_blueprint)
    app.register_blueprint(shops_kmeans_blueprint)
    app.register_blueprint(users_blueprint)
    app.register_blueprint(auth_blueprint)