import logging
from flask_restful import Resource
import os
import sys

sys.path.append(os.path.realpath('.'))
from models.shop import Starbucks
from schemas.shopSchema import ShopSchema
from sklearn import cluster
import pandas as pd

KSHOPS_ENDPOINT = "/api/clustered-shops"
logger = logging.getLogger(__name__)


class ClusterisedShopsResource(Resource):
    def get(self):
        """
        ShopsResource GET method. Retrieves all shops found in the shops database, 
        unless the id path parameter is provided. If this id
        is provided then the shop with the associated shop_id is retrieved.

        :param id: Shop ID to retrieve, this path parameter is optional
        :return: Shop, 200 HTTP status code
        """
        shops = Starbucks.query.all()

        shop_json = self.clusterise(shops)

        logger.info("Shops successfully retrieved.")
        return shop_json

    def clusterise(self,shops):
        mts= [shop.sqmt for shop in shops]
        
        dataset = pd.DataFrame({'x': mts})
        myKmeans = cluster.KMeans(n_clusters=4)
        myKmeans.fit(dataset)
        labels = myKmeans.labels_
        colors = ['red', 'green', 'blue', 'orange']
        shop_json = []
        for shop, label in zip(shops, labels):
            shop.color = colors[label]
            shop_json.append(ShopSchema().dump(shop))
            print(shop)
        return shop_json