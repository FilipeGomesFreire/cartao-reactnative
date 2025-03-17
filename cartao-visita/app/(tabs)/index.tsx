import { Image, StyleSheet, Text, View, Linking, ImageBackground } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Appearance } from 'react-native';

export default function HomeScreen() {
  Appearance.setColorScheme('light'); // Força o tema claro

  const handlePress = (url: string) => {
    Linking.openURL(url).catch(err => console.error("Erro ao abrir o link:", err));
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.imgur.com/ydvdjvB.png' }} // Imagem de fundo online
      style={styles.backgroundImage}
      resizeMode="cover" // Ajusta a imagem para cobrir todo o espaço
    >
      <View style={styles.container}>
        {/* Imagem de perfil */}
        <Image
          source={{ uri: 'https://i.imgur.com/DgjWkR3.jpeg' }} // Substitua pelo link da sua foto
          style={styles.profileImage}
        />

        {/* Nome e cargo */}
        <ThemedText type="title" style={styles.name}>
          FILIPE GOMES FREIRE LEITÃO
        </ThemedText>
        <ThemedText type="title" style={styles.curso}>
          CURSO
        </ThemedText>
        <ThemedText type="title" style={styles.nomeCurso}>
          SISTEMAS PARA INTERNET
        </ThemedText>
        <ThemedText type="subtitle" style={styles.jobTitle}>
          Desenvolvedor Mobile, Web e Backend
        </ThemedText>

        {/* Informações de contato */}
        <ThemedView style={styles.contactInfo}>
          <ThemedText style={styles.contactText}>Email: filipegomesfreire@gmail.com</ThemedText>
          <ThemedText style={styles.contactText}>Telefone: (81) 99626-5245</ThemedText>
        </ThemedView>

        {/* Links de redes sociais */}
        <ThemedView style={styles.socialLinks}>
          <Text
            style={styles.link}
            onPress={() => handlePress('https://www.linkedin.com/in/filipegomesfreire/')}
          >
            LinkedIn
          </Text>
          <Text
            style={styles.link}
            onPress={() => handlePress('https://github.com/filipetrap')}
          >
            GitHub
          </Text>
          <Text
            style={styles.link}
            onPress={() => handlePress('https://instagram.com/filipegomesfreire')}
          >
            Instagram
          </Text>
        </ThemedView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    transform: [{ rotate: '-90deg' }], 
    // backgroundColor: 'rgba(255, 255, 255, 0.7)', // Fundo semi-transparente para melhorar a legibilidade
  },
  profileImage: {
    width: 190,
    height: 190,
    borderRadius: 10,
    marginBottom: 5,
    // transform: [{ rotate: '-90deg' }], 
    position: 'absolute', 
    top: 200, 
    left: 335, 
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#000', 
    // transform: [{ rotate: '-90deg' }], 
    position: 'absolute', 
    top: 320, 
    left: -140, 
  },
  
  curso: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#493034', 
    // transform: [{ rotate: '-90deg' }], 
    position: 'absolute', 
    top: 360, 
    left: -140, 
    
  },
  nomeCurso: {
    fontSize: 24,
    fontWeight: 'light',
    marginBottom: 10,
    textAlign: 'center',
    color: '#000', 
    // transform: [{ rotate: '-90deg' }], 
    position: 'absolute', 
    top: 380, 
    left: -140, 
  },
  jobTitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
    // transform: [{ rotate: '-90deg' }], 
    position: 'absolute', 
    top: 420, 
    left: -140,  
  },
  contactInfo: {
    marginBottom: 20,
    alignItems: 'center',
    // transform: [{ rotate: '-90deg' }], 
    position: 'absolute', 
    top: 500, 
    left: 250, 
  },
  contactText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    // transform: [{ rotate: '-90deg' }], 
    position: 'absolute', 
    top: 520, 
    left: -120, 
  },
  link: {
    fontSize: 16,
    color: '#0077b5', // Cor do LinkedIn
    textDecorationLine: 'underline',
  },
});