import sqlite3
import json

# Conectar ao banco de dados SQLite
conn = sqlite3.connect('db.sqlite3')
cursor = conn.cursor()

# Definir os dados a serem inseridos
produtos = [
    (8, 'Giannis Freak', 999.99, 'O Giannis Freak é o tênis que personifica a força e a agilidade do famoso jogador de basquete Giannis Antetokounmpo. Desenvolvido para atender às exigências dos atletas de alto nível, este modelo é perfeito para quem busca desempenho sem abrir mão do estilo. A parte superior do tênis combina materiais leves e duráveis, proporcionando suporte excepcional durante movimentos rápidos e explosivos em quadra. O design moderno é complementado por detalhes únicos que fazem referência à trajetória de Giannis, incluindo seu logo e elementos gráficos inspirados em sua herança cultural. O sistema de amortecimento responsivo e o solado de borracha com padrão de tração avançada garantem conforto e aderência durante os jogos mais intensos. Versátil e impactante, o Giannis Freak também é uma excelente escolha para quem deseja um sneaker de performance para o dia a dia, com um visual que exala atitude e inovação.',
     '{"imagem_principal": "images/Giannis Freak.avif", "imagem_sola": "images/Giannis Freak - Sola.avif", "imagem_direita": "images/Giannis Freak - Direita.avif", "imagem_cima": "images/Giannis Freak - Cima.avif", "imagem_lado": "images/Giannis Freak - Lado.avif", "imagem_costas": "images/Giannis Freak - Costas.avif"}',
     'Sneakers', 'Novidades', 1),
    
    (9, 'Book 1 Haven', 999.99, 'O Book 1 Haven é um tênis que combina inovação e estilo contemporâneo, projetado para oferecer não apenas desempenho, mas também um visual arrojado e único. Com uma silhueta moderna, o modelo é perfeito para aqueles que procuram conforto e versatilidade, tanto para o uso diário quanto para momentos de lazer. Sua parte superior é feita de materiais de alta qualidade, com detalhes que proporcionam resistência e respirabilidade, mantendo os pés frescos durante o uso prolongado. O design minimalista é complementado por toques sofisticados, como o logo discreto e acabamentos cuidadosamente elaborados. O sistema de amortecimento proporciona conforto o dia todo, e o solado de borracha com padrão de tração garante estabilidade e aderência. Ideal para quem aprecia um visual clean, o Book 1 Haven é um verdadeiro curinga no guarda-roupa, pronto para se destacar em qualquer ocasião, com a combinação perfeita entre funcionalidade e estilo.',
     '{"imagem_principal": "images/Book 1 Haven.avif", "imagem_sola": "images/Book 1 Haven - Sola.avif", "imagem_direita": "images/Book 1 Haven - Direita.avif", "imagem_cima": "images/Book 1 Haven - Cima.avif", "imagem_lado": "images/Book 1 Haven - Lado.avif", "imagem_costas": "images/Book 1 Haven - Costas.avif"}',
     'Sneakers', 'Novidades', 1),
    
    (10, 'Jordan 5 ''El Grito''', 999.99, 'O Jordan 5 El Grito é uma edição limitada que celebra a cultura e a paixão do basquete com um design ousado e vibrante. Inspirado pela energia e pela história das vitórias de Michael Jordan, esse modelo apresenta uma mistura de detalhes únicos e cores marcantes. Com a clássica silhueta do Jordan 5, o tênis exibe um acabamento em couro de alta qualidade, complementado por detalhes em cores fortes e contrastantes, trazendo à tona um estilo distinto que chama atenção. O icônico logo Jumpman e as famosas guelras na lateral são acentuados, conferindo ao modelo um toque de dinamismo e força. Além da estética, o Jordan 5 El Grito mantém as características que tornaram esse modelo um dos mais reconhecidos no mundo dos sneakers, como o sistema de amortecimento Air-Sole para máximo conforto e suporte, e a sola de borracha com padrão de tração para excelente aderência. Ideal para quem busca um tênis com estilo marcante e desempenho superior, o Jordan 5 El Grito é a escolha perfeita para os apaixonados pela marca e colecionadores de edições especiais.',
     '{"imagem_principal": "images/Jordan 5 ''El Grito''.avif", "imagem_sola": "images/Jordan 5 ''El Grito'' - Sola.avif", "imagem_direita": "images/Jordan 5 ''El Grito'' - Direita.avif", "imagem_cima": "images/Jordan 5 ''El Grito'' - Cima.avif", "imagem_lado": "images/Jordan 5 ''El Grito'' - Lado.avif", "imagem_costas": "images/Jordan 5 ''El Grito'' - Costas.avif"}',
     'Sneakers', 'Novidades', 1),
    
    # Adicione os outros produtos aqui no mesmo formato...

]

# Inserir os dados no banco de dados
query = '''
INSERT INTO api_produto (id, tituloProduto, preco, descricao, imgProduto, catProduto, classProduto, exibirHome)
VALUES (?, ?, ?, ?, ?, ?, ?, ?)
'''

# Executar a inserção para cada produto
cursor.executemany(query, produtos)

# Confirmar as alterações no banco de dados
conn.commit()

# Fechar a conexão
conn.close()

print("Dados inseridos com sucesso.")
