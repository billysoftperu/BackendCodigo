# Hacer una Factory para generar 1000 usuarios aleatoriamente


from faker import Faker
from faker.providers import internet
fake = Faker()
fake.add_provider(internet)

def usuarios_fake(limite):
    for id in range(0,limite):
        nombre=faker.first_name()
        apellido=faker.last_name()
        dni=faker.random_int(min=10000000, max=99999999)
        email=faker.ascci_free_email()
        print("INSERT INTO usuarios VALUES (%s, '%s', '%s', '%s', '%s');" %
                (id+1, nombre, apellido, dni, email)

usuario_fake(1000)


