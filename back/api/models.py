from django.db import models

class Produto(models.Model):
    tituloProduto = models.CharField(max_length=255)
    preco = models.DecimalField(max_digits=10, decimal_places=2)
    descricao = models.CharField(max_length=255)
    imgProduto = models.ImageField(blank=True, null=True)
    catProduto = models.CharField(max_length=255)
    classProduto = models.CharField(max_length=255)
    exibirHome = models.BooleanField(default=True)
    