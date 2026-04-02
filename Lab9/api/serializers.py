from rest_framework import serializers
from .models import Product, Category

class CategorySerializer(Model.Serializer):
    class Meta:
        model = Category
        fields = '__all__'

class ProductSerializer(Model.Serializer):
    class Meta:
        model = Product
        fields = '__all__'