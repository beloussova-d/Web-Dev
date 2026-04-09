from django.shortcuts import render #when do i use it?
# from django.http import JsonResponse
from .models import Product, Category

from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from .serializers import CategorySerializer, ProductSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    @action(detail=True, methods=['get'])
    def products(self, request, pk=None):
        category = self.get_object()
        products = Product.objects.filter(category = category)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


# def product_list(request):
#     products = Product.objects.all()
#     data = []

#     for p in products:
#         data.append({
#             "id": p.id,
#             "name": p.name,
#             "price": p.price,
#             "description": p.description,
#             "count": p.count,
#             "is_active": p.is_active,
#             "category_id": p.category.id
#         })
    
#     return JsonResponse(data, safe = False)

# def product_detail(request, id): #product_id
#     try:
#         p = Product.objects.get(id=id) #id = product_id
#         data = {
#             "id": p.id,
#             "name": p.name,
#             "price": p.price,
#             "description": p.description,
#             "count": p.count,
#             "is_active": p.is_active,
#             "category_id": p.category.id
#         }
#         return JsonResponse(data)
#     except Product.DoesNotExist:
#         return JsonResponse({"error": "Product not found"}, status=404)

# def category_list(request):
#     categories = Category.objects.all()
#     data = []

#     for c in categories:
#         data.append({
#             "id": c.id,
#             "name": c.name
#         })
    
#     return JsonResponse(data, safe = False)

# def category_detail(request, id):
#     try:
#         c = Category.objects.get(id=id)
#         data = {
#             "id": c.id,
#             "name": c.name
#         }
#         return JsonResponse(data)
#     except Category.DoesNotExist:
#         return JsonResponse({"error": "Category not found"}, status=404)

# def products_by_category(request, id):
#     try:
#         category = Category.objects.get(id=id)
#         products = Product.objects.filter(category=category)

#         data = []

#         for p in products:
#             data.append({
#                 "id": p.id,
#                 "name": p.name,
#                 "price": p.price,
#                 "description": p.description,
#                 "count": p.count,
#                 "is_active": p.is_active,
#                 "category_id": p.category.id
#             })
    
#         return JsonResponse(data, safe = False)
#     except Category.DoesNotExist:
#         return JsonResponse({"error": "Category not found"}, status=404)
    
