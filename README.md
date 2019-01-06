# frontend

Testando CSS, JavaScript, jQuery, Ajax, AngularJS, Django e mais...

E [interfaces web][2] do Curso de Verão IME USP 2017.

## Running local with Python server

```
python -m http.server
```

Eu tenho duas **branchs**:

### gh-pages

O básico do frontend.

Site estático online em rg3915.github.io/frontend

Leia também [Head básico de um HTML](https://github.com/rg3915/frontend/blob/master/docs/html-head-basico.md)

Mini curso de VueJS by [Minicurso: VueJS](https://evolutio.io/curso/minicurso_vuejs) e repo em [github.com/evolutio/minicurso_vuejs](https://github.com/evolutio/minicurso_vuejs).

### master

Estudo de Frontend incluindo [Django Framework][0].

Dentro do projeto Django tenho várias **apps**:

#### front-django-basic

**App:** `djbasic`

#### front-django-learning

**App:** `djlearning`

Baseado em [simple_ajax_crud][1].

#### front-django-experience

**App:** `djexperience`

Minhas experiências enquanto estudo frontend.

## Instalação

```
python -m venv .venv # Python 3
source .venv/bin/activate
git clone https://github.com/rg3915/frontend
cd frontend
python contrib/env_gen.py
make setup
```

### Semantic-UI form

Estou experimentando o [django-semanticui-form][3] e [semantic-ui][4] templates.

[0]: https://www.djangoproject.com/
[1]: https://github.com/olivx/simple_ajax_crud
[2]: https://github.com/rg3915/frontend/tree/master/interfaces_web
[3]: https://www.peterbe.com/plog/django-semanticui-form
[4]: http://semantic-ui.com/