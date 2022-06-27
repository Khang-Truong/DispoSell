package DispoSell;

import DispoSell.models.*;
import DispoSell.repositories.FurnitureMediaRepository;
import DispoSell.repositories.FurnitureRepository;
import DispoSell.repositories.RoleRepository;
import DispoSell.repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class DispoSellApplication {

    public static void main(String[] args) {
        SpringApplication.run(DispoSellApplication.class, args);
    }

    @Bean
    CommandLineRunner commandLineRunner(RoleRepository roleRepository,
                                        UserRepository userRepository,
                                        FurnitureRepository furnitureRepository,
                                        FurnitureMediaRepository furnitureMediaRepository) {
        return args -> {
            if (roleRepository.count() == 0) {
                roleRepository.save(new Role(ERole.ROLE_ADMIN));
                roleRepository.save(new Role(ERole.ROLE_DELIVERY));
                roleRepository.save(new Role(ERole.ROLE_USER));
                System.out.println("Added 3 roles");
            }
            // TODO: Remove later, for testing only
            if (userRepository.findByUsername("test_user_123456").isEmpty()) {
                User user = new User();
                user.setUsername("test_user_123456");
                user.setEmail("test_user_123456@gmail.com");
                user.setContactAddress("test_user_123456 delivery address");
                user.setPhoneNumber("123456789");
                user.setPassword("test_user_123456 password");
                Role userRole = roleRepository.findByName(ERole.ROLE_USER).get();
                Set<Role> roles = new HashSet<>();
                roles.add(userRole);
                user.setRoles(roles);
                userRepository.save(user);

                user = userRepository.findByUsername("test_user_123456").get();
                Furniture furniture = new Furniture();
                furniture.setName("Furniture 1");
                furniture.setDescription("Description 1");
                furniture.setApprover(user);
                furniture.setApprovedDate(java.time.ZonedDateTime.now());
                furnitureRepository.save(furniture);

                furniture = furnitureRepository.findByName("Furniture 1").get();
                FurnitureMedia media1 = new FurnitureMedia(furniture, "img1.png", "png", null);
                furnitureMediaRepository.save(media1);

                FurnitureMedia media2 = new FurnitureMedia(furniture, "img2.png", "png", user);
                furnitureMediaRepository.save(media2);

                furniture = new Furniture();
                furniture.setName("Furniture 2");
                furniture.setDescription("Description 2");
                furnitureRepository.save(furniture);
            }

            //Insert Test
            if (userRepository.findByUsername("test_user_290194").isEmpty()) {
                User user = new User();
                user.setUsername("test_user_290194");
                user.setEmail("test_user_2901946@gmail.com");
                user.setContactAddress("test_user_290194 delivery address");
                user.setPhoneNumber("987654321");
                user.setPassword("test_user_290194 password");
                Role userRole = roleRepository.findByName(ERole.ROLE_USER).get();
                Set<Role> roles = new HashSet<>();
                roles.add(userRole);
                user.setRoles(roles);
                userRepository.save(user);

                user = userRepository.findByUsername("test_user_290194").get();
                Furniture furniture = new Furniture();
                furniture.setName("Furniture 3");
                furniture.setDescription("Description 3");
                furniture.setApprover(user);
                furniture.setApprovedDate(java.time.ZonedDateTime.now());
                furnitureRepository.save(furniture);

                furniture = furnitureRepository.findByName("Furniture 3").get();
                FurnitureMedia media1 = new FurnitureMedia(furniture, "img3.png", "png", null);
                furnitureMediaRepository.save(media1);

                FurnitureMedia media2 = new FurnitureMedia(furniture, "img4.png", "png", user);
                furnitureMediaRepository.save(media2);

                furniture = new Furniture();
                furniture.setName("Furniture 3");
                furniture.setDescription("Description 3");
                furnitureRepository.save(furniture);

            }

        };
    }
}
