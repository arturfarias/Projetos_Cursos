from django.contrib import admin
from escola.models import Aluno, Curso

class Alunos(admin.ModelAdmin):
    list_display = ('id', 'nome', 'rg', 'cpf', 'data_nascimento' )
    # campos que devem aparecer.
    list_display_links = ('id', 'nome')
    # informa quais campos devem ser clicaveis pelo editor
    search_fields = ['nome',]
    # quais campos são possiveis de busca
    list_per_page = 20 # quantidade de elementos por pagina

admin.site.register(Aluno, Alunos) # (model, modelAdmin)

class Cursos(admin.ModelAdmin):
    list_display = ('id', 'codigo_curso', 'descricao')
    list_display_links = ('id', 'codigo_curso')
    search_fields = ('codigo_curso',)

admin.site.register(Curso, Cursos)