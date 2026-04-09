from django.urls import path, include
# from api.views import product_list, product_detail # fbv
# from api.views import ProductDetailAPIView, ProductListAPIView # cbv
from api.views import (
    ProductDetailAPIView, 
    ProductListAPIView, 
    CategoryListAPIView, 
    CategoryDetailAPIView,
    CategoryProductsAPIView
)

# from . import views

# from rest_framework.routers import DefaultRouter
# from .views import ProductViewSet, CategoryViewSet

# router = DefaultRouter()

# router.register(r'categories', CategoryViewSet)
# router.register(r'products', ProductViewSet)

urlpatterns = [
    # cbv (id) or mixins (product_id) or generics (product_id, category_id)
    path('products/', ProductListAPIView.as_view()),
    path('products/<int:product_id>/', ProductDetailAPIView.as_view()),
    path('categories/', CategoryListAPIView.as_view()),
    path('categories/<int:category_id>/', CategoryDetailAPIView.as_view()),
    path('categories/<int:category_id>/products/', CategoryProductsAPIView.as_view())

    # fbv
    # path('products/', product_list),
    # path('products/<int:id>/', product_detail),

    # REST framework
    # path('', include(router.urls)),

    #manual
    # path('products/', views.product_list),
    # path('products/<int:id>/', views.product_detail),
    # path('categories/', views.category_list),
    # path('categories/<int:id>/', views.category_detail),
    # path('categories/<int:id>/products/', views.products_by_category),
]